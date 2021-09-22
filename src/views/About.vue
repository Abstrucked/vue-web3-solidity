<template>
	<div>
		<Menu></Menu>
		<h1>ABOUT PAGE</h1>
    <ThisFooter></ThisFooter>
	</div>
  
</template>

<script>
  import Menu from '@/components/Menu.vue'
  import ThisFooter from '@/components/Footer'

  export default {
		components: { Menu, ThisFooter }
	}
</script>