<script>
  import Navbar from "./assets/components/navbar.svelte";
  import Wrapper from "./assets/components/wrapper.svelte";
  import Footer from "./assets/components/footer.svelte";
  import Calculator from "./assets/components/calculator.svelte";
</script>

<Wrapper>
  <Navbar>
    <p>Hello World!</p>
    <h1>Calculadora do Doglas</h1>
    <a href="https://github.com/DoglasRocha" target="_blank">
      <img src="../public/img/github-mark-white.svg" alt="Logo do GitHub" class="logo">
    </a>
  </Navbar>
  <Calculator/>
  <Footer>
    <span></span>
    <p>Hello World do Doglas</p>
    <span></span>
  </Footer>
</Wrapper>


<style>
  .logo {
    width: 40px;
  }
</style>
