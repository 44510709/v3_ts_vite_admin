<template>
  <BasicUpload :maxSize="20" :maxNumber="10" @change="handleChange" :api="uploadApi" />
</template>
<script lang="ts">
  import { defineComponent } from 'vue';
  import { BasicUpload } from '/@/components/Upload';
  import { uploadApi } from '/@/api/sys/upload';

  export default defineComponent({
    components: { BasicUpload },
    setup() {
      console.log(12);

      return {
        uploadApi,
        handleChange: (list: string[]) => {
          createMessage.info(`已上传文件${JSON.stringify(list)}`);
        }
      };
    }
  });
</script>
