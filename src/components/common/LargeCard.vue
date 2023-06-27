<template>
    <div class="card">
        <img :src="photo" alt="Card Photo" class="card-photo"/>
        <div class="card-info">
            <h3 class="card-title">{{ title }}</h3>
            <p class="card-description">{{ description }}</p>
            <div class="card-details">
                <p class="card-field">Field 1: {{ field1 }}</p>
                <p class="card-field">Field 2: {{ field2 }}</p>
                <!-- Добавьте другие поля по необходимости -->
            </div>
        </div>
    </div>
</template>

<script lang="ts">
    export default {
        props: {
            photo: String,
            title: String,
            description: String,
            field1: String,
            field2: String
            // Добавьте другие свойства для полей по необходимости
        }
    }

</script>

<style lang="scss" scoped>
.card {
  display: flex;
  flex-direction: column;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 16px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }

  .card-photo {
    width: 100%;
    max-width: 200px;
    height: auto;
    margin-bottom: 12px;

    @media (min-width: 768px) {
      margin-bottom: 0;
      margin-right: 12px;
    }
  }

  .card-info {
    flex: 1;

    .card-title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 8px;
    }

    .card-description {
      margin-bottom: 12px;
    }

    .card-details {
      .card-field {
        margin-bottom: 4px;
      }
    }
  }
}
</style>
