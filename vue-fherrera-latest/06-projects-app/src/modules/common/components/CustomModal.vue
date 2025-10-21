<template>
  <dialog class="modal" :open="open">
    <div class="modal-box">
      <div class="border-b border-blue-500 pb-2">
        <!-- Header -->

        <slot name="header" />
      </div>

      <div class="my-5">
        <slot name="body" />
      </div>

      <div class="border-t border-t-blue-500 pt-2 modal-action">
        <slot name="actions" />
      </div>
    </div>
  </dialog>
</template>

<script lang="ts" setup>
interface Props {
  open?: boolean;
}

withDefaults(defineProps<Props>(), {
  open: false,
});
</script>
