<script lang="ts">
  // App file will read cards dimensions
  // ask for dimensions of a paper to print on (defalut A4)
  // and then creates a layout so that 
  //	- all will fit inside
  // 	- will alternate between the card face and card back
  
  import Card from "./Card.svelte";
  import processData from "./processData.ts";

  console.log('Pdata', processData());
</script>

<main class="a4size">
 {#each processData() as card}
 	<Card sign={card.sign} --color={card.color} />
 {/each}  
</main>

<style>
.a4size {
	width: 210mm;
	height: 297mm;
	border: 1px solid red;
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: space-between;
}

.card {
	border: 1px solid green;
}
  
</style>
