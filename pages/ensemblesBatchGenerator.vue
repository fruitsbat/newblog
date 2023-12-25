<template>
  <div class="prose">
    <HeadingWithHomeButton title="batch script generator for numio ensembles" />
    <pre>
#!/bin/bash
	
#SBATCH --time=1
#SBATCH --nodes=2
#SBATCH --ntasks-per-node=5
#SBATCH --ntasks=10
#SBATCH --partition=west
# Output goes to "job.out", error messages to "job.err".
#SBATCH --output=job.out
#SBATCH --error=job.err

mpiexec python src/main.py
</pre
    >
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "numio ensembles batch script generator",
});

definePageMeta({
  layout: "blogpost",
});
</script>
