<template>
    <Teleport to="body">
        <div class="volunteer">
            <div class="volunteer__header">
                <h3></h3>
                <img
                    src="/help_shelters_project/icons8-cross-50.png" alt="Логотип"
                    @click="$emit('close')"
                />
                <img :src="`/help_shelters_project/images/${volunteerInfo.images[0]}`" alt="Image" class="volunteer__photo"/>
                <div class="volunteer__info" v-html="volunteerInfo.contacts"/>
                <div class="volunteer__info" v-html="volunteerInfo.textLarge"/>
                <div class="volunteer__info" v-html="volunteerInfo.location"/>
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

            return {

            }
        }
    }
</script>

<style lang="scss" scoped>
.volunteer {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  width: 50vw;
  height: 50vh;
  background: green;
  border-radius: 4px;

  &__photo {
    width: 250px;
    height: 250px;
    float: right;
  }
}
</style>