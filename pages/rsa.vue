<template>
    <div class="prose p-8">
        <HomeButton />
        <h1>rsa</h1>
        <h2>semi primes</h2>
        <p>
            a factor is a number that you can divide another number by.
            for example the factors of 6 are 2 and 3.
            6 is also a semi prime number since all of it's factors are prime numbers.

            you will always get a semi prime number when you multiply two prime numbers.
        </p>

        <h2>generate keys</h2>
        <div class="flex gap-4">
            <div class="flex flex-col gap-2">
                <span class="font-bold">p=</span>
                <select class="select" v-model="p">
                    <option v-for="num in smallPrimes" :value="num">
                        {{  num }}
                    </option>
                </select>
                <span class="bg-warning p-2 text-warning-content rounded-lg" v-if="!isPrime(p)">{{ p }} is not prime</span>
                <button class="btn" @click="p = randomSmallPrime()">
                    <ArrowPathIcon class="w-6 h-6" />
                    <span>reroll</span>
                </button>
            </div>
            <div class="flex flex-col gap-2">
                <span class="font-bold">q=</span>
                <select class="select" v-model="q">
                    <option v-for="num in smallPrimes" :value="num">
                        {{  num }}
                    </option>
                </select>
                <span class="bg-warning p-2 text-warning-content rounded-lg" v-if="!isPrime(q)">{{ q }} is not prime</span>
                <button class="btn" @click="q = randomSmallPrime()">
                    <ArrowPathIcon class="w-6 h-6" />
                    <span>reroll</span>
                </button>
            </div>
        </div>
        <span v-if="q === p">p and q should not be the same</span>
        <p>
            next we will need to calculate their product n = p * q = {{ p }} * {{ q }} = {{ n }}
            and the Euler totient φ(n) = {{ phi }}
        </p>
        <h3>public key</h3>
        <p>
            the public key must fulfill a few conditions
        <ul>
            <li>must be prime</li>
            <li>must be smaller φ(n)</li>
            <li>must not be a factor φ(n)</li>
        </ul>
        a number where this is true is: {{ chosenPublicKey }}
        </p>
    </div>
</template>

<script setup lang="ts">
import { ArrowPathIcon } from '@heroicons/vue/24/solid';
useHead({
    title: "the math behind rsa"
})

function isPrime(num: number): boolean {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

function findPrimesBelow(num: number): Array<number> {
    return Array.from(Array(num).keys()).filter((n) => {return isPrime(n)})
}

const smallPrimes = findPrimesBelow(100).filter((num) => {return num > 3})
const primes = findPrimesBelow(8633)

function randomSmallPrime(): number {
    const randomNumber = Math.round(Math.random() * smallPrimes.length)
    return smallPrimes.filter((item) => {return item !== p.value && item !== q.value})[randomNumber % smallPrimes.length]
}

const p = ref(13)
const q = ref(43)
const publicKeyIndex = ref(50)

const n = computed(() => {
    return p.value * q.value
})

const phi = computed(() => {
    return (p.value - 1) * (q.value - 1)
})

const validPublicKeys = computed(() => {
    return primes.filter((num) => {return num < phi.value}).filter((key) => {return phi.value % key !== 0})
})

const chosenPublicKey = computed(() => {
    return validPublicKeys.value[publicKeyIndex.value % validPublicKeys.value.length]
})
</script>