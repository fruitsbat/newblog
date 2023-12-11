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
                <input class="input" type="number" v-model="p">
                <span v-if="isPrime(p)">{{ p }} is prime</span>
                <span class="bg-warning p-2 text-warning-content rounded-lg" v-else>{{ p }} is not prime</span>
            </div>
            <div class="flex flex-col gap-2">
                <span class="font-bold">q=</span>
                <input class="input" type="number" v-model="q">
                <span v-if="isPrime(q)">{{ q }} is prime</span>
                <span class="bg-warning p-2 text-warning-content rounded-lg" v-else>{{ q }} is not prime</span>
            </div>
        </div>
        <p>
            next we will need to calculate their product n = p * q = {{ p }} * {{ q }} = {{ n }}
            and the Euler totient φ(n) = {{ phi }}
        </p>
        <h3>public key</h3>
        <p>
            the public key must fulfill a few conditions:
        <ul>
            <li>must be prime</li>
            
            <li>must be less than φ(n)</li>
            <li>must not be a factor φ(n)</li>
        </ul>
        </p>
    </div>
</template>

<script setup lang="ts">

function isPrime(num: number): boolean {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}

const p = ref(79)
const q = ref(19)

const n = computed(() => {
    return p.value * q.value
})

const phi = computed(() => {
    return (p.value - 1) * (q.value - 1)
})
</script>