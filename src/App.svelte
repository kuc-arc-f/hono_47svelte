<script lang="ts">
import Router from 'svelte-spa-router'
import Home from './client/Home.svelte'
import About from './client/About.svelte'
import Test1 from './client/Test1.svelte'
//
import NotFound from './client/NotFound.svelte'

export const routes = {
  '/': Home,
  '/about': About,
  //
  '/test1': Test1,
  //
  '*': NotFound,
}
</script>

<!-- -->
<main>
    <h1>Vite + Svelte</h1>
    <Router {routes} />
    <hr />
</main>

<style>
</style>
