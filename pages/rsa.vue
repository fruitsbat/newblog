<template>
    <div class="flex gap-4 p-4 items-center">
        <HomeButton />
        <span class="items-center font-black text-4xl">rsa calculator</span>
    </div>
    <div class="prose p-8">

        <h2>generate keys</h2>
        <p>the first step is picking two prime numbers:</p>
        <div class="flex gap-4">
            <div class="flex flex-col gap-2">
                <span class="font-bold">p=</span>
                <select class="select" v-model="p">
                    <option v-for="num in smallPrimes" :value="num">
                        {{ num }}
                    </option>
                </select>
                <span class="bg-warning p-2 text-warning-content rounded-lg" v-if="!isPrime(p)">{{ p }} is not prime</span>
            </div>
            <div class="flex flex-col gap-2">
                <span class="font-bold">q=</span>
                <select class="select" v-model="q">
                    <option v-for="num in smallPrimes" :value="num">
                        {{ num }}
                    </option>
                </select>
                <span class="bg-warning p-2 text-warning-content rounded-lg" v-if="!isPrime(q)">{{ q }} is not prime</span>
            </div>
        </div>
        <span v-if="q === p">p and q should not be the same</span>
        <p>
            next we will need to calculate their product n = p * q = {{ p }} * {{ q }} = {{ n }}
            and the Euler totient φ({{ n }}) = {{ phi }}
        </p>
        <h3>public key</h3>
        <p>
            the public key must fulfill a few conditions
        <ul>
            <li>must be prime</li>
            <li>must be smaller than φ(n) = {{ phi }}</li>
            <li>must not be a factor φ(n) = {{ phi }}</li>
        </ul>
        a number where this is true is:
        <select class="select" v-model="publicKeyIndex">
            <option v-for="key, index in validPublicKeys" :value="index">{{ key }}</option>
        </select>.
        we will use it in our public key: {{ `(${chosenPublicKey}, ${n})` }}.
        </p>
        <h3>private key</h3>
        <p>
            The private key will need to be the multiplicative modular inverse of our public key and φ(n).
            We can use the extended euclidean algorithm for this.
        <ol>
            <li v-for="step in euclidStepOne">
                {{ step.solution }} = {{ step.factor }} * {{ step.value }} + {{ step.added }}
            </li>
        </ol>
        <ol>
            <li v-for="step in extendedEuclideanAlgorithm">
                {{ `q=${step.q} r=${step.r} s=${step.s} t=${step.t}` }}
            </li>
        </ol>
        if our candidate is below zero we have to add our φ(n), the modulus, to it until it is positive.
        {{ phi }} * {{ privateKey.belowZeroCount }} + {{ extendedEuclideanAlgorithm.at(-1)?.oldT }} = {{ privateKey.key }}
        this means that we can use {{ `(${privateKey.key}, ${n})` }} as a private key.
        </p>
        <!-- <h2>encoding the message</h2>
        <p>
            we can encode our message <input class="input" type="number" v-model="message" /> using either of the keys
            usually this is done with public key.
            if we encrypt something with a public key it ensures that only the person with the private key can decrypt it.
            {{ message }}<sup>{{ chosenPublicKey }}</sup> mod {{ n }} = {{ encryptedMessage }}.

            we can also decrypt it using our private key:
            {{ encryptedMessage }}<sup>{{ privateKey.key }}</sup> mod {{ n }} = {{ decryptedMessage }}.
        </p> -->
    </div>
</template>

<script setup lang="ts">
useHead({
    title: "rsa calculator",
})

function isPrime(num: number): boolean {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function findPrimesBelow(num: number): Array<number> {
    return Array.from(Array(num).keys()).filter((n) => { return isPrime(n) })
}

const smallPrimes = findPrimesBelow(100).filter((num) => { return num > 3 })
const primes = findPrimesBelow(8634)

const p = ref(13)
const q = ref(43)
const publicKeyIndex = ref(0)

const n = computed(() => {
    return p.value * q.value
})

const phi = computed(() => {
    return (p.value - 1) * (q.value - 1)
})

const validPublicKeys = computed(() => {
    return primes.filter((num) => { return num < phi.value }).filter((key) => { return phi.value % key !== 0 })
})

const chosenPublicKey = computed(() => {
    return validPublicKeys.value[publicKeyIndex.value % validPublicKeys.value.length]
})

type EuclidStep = { solution: number, factor: number, value: number, added: number }
const euclidStepOne = computed(() => {
    const step1 = {
        solution: phi.value,
        factor: Math.floor(phi.value / chosenPublicKey.value),
        value: chosenPublicKey.value,
        added: phi.value - (Math.floor(phi.value / chosenPublicKey.value) * chosenPublicKey.value)
    } as EuclidStep
    let steps: Array<EuclidStep> = [step1]
    while (steps.at(-1)?.added !== 0) {
        const newSolution = steps.at(-1)!.value
        const newValue = steps.at(-1)!.added
        const newFactor = Math.floor(newSolution / newValue)
        const newAdded = newSolution - (newValue * newFactor)
        steps.push(
            {
                solution: newSolution,
                factor: newFactor,
                value: newValue,
                added: newAdded,
            }
        )
    }
    return steps
})

type extendedEuclideanAlgorithmResults = {
    r: number,
    s: number,
    t: number,
    oldR: number,
    oldS: number,
    oldT: number,
    q: number,
}
const extendedEuclideanAlgorithm = computed(() => {
    let list: Array<extendedEuclideanAlgorithmResults> = []
    let a = chosenPublicKey.value
    let b = phi.value

    if (a < b) [a, b] = [b, a];
    let s = 0, oldS = 1;
    let t = 1, oldT = 0;
    let r = b, oldR = a;
    list.push({ r, s, t, oldR, oldS, oldT, q: Math.floor(oldR / r) })
    while (r != 0) {
        let q = Math.floor(oldR / r);
        [r, oldR] = [oldR - q * r, r];
        [s, oldS] = [oldS - q * s, s];
        [t, oldT] = [oldT - q * t, t];
        list.push({ r, s, t, oldR, oldS, oldT, q })
    }
    return list
})

const privateKey = computed(() => {
    const last = extendedEuclideanAlgorithm.value.at(-1)!
    let iterations = 0
    let key = last.oldT
    while (key < 0) {
        iterations++
        key += phi.value
    }
    return { key: key % phi.value, belowZeroCount: iterations }
})

const message = ref(1337)

const encryptedMessage = computed(() => {
    return Math.pow(message.value, chosenPublicKey.value) % n.value
})

const decryptedMessage = computed(() => {
    return Math.pow(encryptedMessage.value, privateKey.value.key) % n.value
})
</script>