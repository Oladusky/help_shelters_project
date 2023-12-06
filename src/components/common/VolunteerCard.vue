<template>
    <Teleport v-if="volunteerInfo" to="body">
        <div class="wrapper">
            <div class="volunteer">
                <div class="volunteer_header">
                    <h3>{{ volunteerInfo.title }}</h3>
                    <img
                        :src="`/help_shelters_project/icons8-cross-50.png`" alt="Логотип"
                        @click="$emit('close')"
                    />
                </div>
                <div class="volunteer_content">
                    <img :src="`/help_shelters_project/images/${volunteerInfo.images[0]}`" alt="Image"
                         class="volunteer_photo"/>
                    <div class="volunteer_info" v-html="volunteerInfo.contacts"/>
                    <div class="volunteer_info" v-html="volunteerInfo.location"/>
                    <div class="volunteer_info" v-html="volunteerInfo.textLarge"/>
                </div>
            </div>
        </div>
    </Teleport>
</template>

<script lang="ts">
    export default {
        name: 'VolunteerCard',
        props: {
            volunteerInfo: {
                type: Object
            }
        },
        setup (props) {

            return {}
        }
    }
</script>

<style lang="scss" scoped>
.wrapper {
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(2px);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
}
.volunteer {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 50vw;
  height: 50vh;
  background: beige;
  border-radius: 4px;
  padding: 10px 20px;

  @include mobileOrTablet {
    width: 100vw;
    height: max-content;
  }

  &_header {
    display: flex;
    justify-content: space-between;
    width: 100%;

    & img {
      width: 35px;
      height: 35px;
      cursor: pointer;

      @include mobileOrTablet {
        width: 25px;
        height: 25px;
      }
    }
  }

  &_photo {
    width: 250px;
    height: 250px;
    float: right;
    border-radius: 10px;

    @include mobileOrTablet {
      width: 150px;
      height: 150px;
      margin: 0 0 5px 5px;
    }
  }

  &_content {
    margin: 15px 0;

    & div {
      margin-bottom: 10px;
      font-size: 14px;
    }

    :deep(span) {
      font-weight: 600;
    }
  }
}
</style>