<template>
  <div class="categorys container">
    <div class="category">
      <div class="icon">
        <img src="src\assets\images\Vectormale.svg" alt="male-icon" />
      </div>
      <div class="category__info">
        <h3>Для женщин</h3>
        <p>4 147 объявлений</p>
      </div>
    </div>
    <div class="category">
      <div class="icon">
        <img src="src\assets\images\Vectormale.svg" alt="male-icon" />
      </div>
      <div class="category__info">
        <h3>Для женщин</h3>
        <p>4 147 объявлений</p>
      </div>
    </div>
    <div class="category">
      <div class="icon">
        <img src="src\assets\images\Vectormale.svg" alt="male-icon" />
      </div>
      <div class="category__info">
        <h3>Для женщин</h3>
        <p>4 147 объявлений</p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.categorys {
  display: grid;
  grid-template-columns: repeat(3, 30%);
  justify-content: space-between;
  margin-top: 50px;
}
.category {
  padding: 20px;
  border: 1px solid gray;
  border-radius: 12px;
  position: relative;
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 70px;
    height: 70px;

    background-color: red;
    border: 1px solid #5c5757;
    border-radius: 12px;
    position: absolute;
  }
}
</style>
