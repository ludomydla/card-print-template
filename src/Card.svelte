<script>
  let { color, sign } = $props();
</script>

<div class="card">
  <div class="inside">
  	<span class="sign">
	  {sign}
	</span>
  </div>
</div>

<style>
  .card {
  	width: 64mm;
  	height: 89mm;
  	border-radius: 5mm;
  	border: 1px solid lightgrey;
  	padding: 5mm;
  }

  .inside {
    width: 100%;
    height: 100%;
    border-radius: 4mm;
    background-color: var(--color);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;	
  }

  .sign {
  	font-size: 10mm;
  	width: 12mm;
  	height: 12mm;
  	background-color: black;
  	color: white;
  	border-radius: 2mm;
  	text-align: center;
  }
</style>
