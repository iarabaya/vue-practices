<template>
  <div class="w-full">
    <section class="m-2">
      <bread-crumbs :name="project?.name ?? 'No name'" />
    </section>
    <section class="m-2">
      <div class="overflow-x-auto">
        <table class="table">
          <!-- head -->
          <thead>
            <tr>
              <th class="w-14">Completada</th>
              <th>Tarea</th>
              <th>Completada en</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 2 -->
            <tr v-for="task in project?.tasks" :key="task.id" class="hover:bg-base-300">
              <th class="flex justify-center"><input type="checkbox" name="" id="" /></th>
              <td>{{ task.name }}</td>
              <td>{{ task.completedAt }}</td>
            </tr>

            <!-- row 2 -->
            <tr class="hover:bg-base-300">
              <th></th>
              <td>
                <input
                  v-model="inputValue"
                  type="text"
                  class="input input-primary w-full opacity-60 transition-all hover:opacity-100 focus:opacity-100"
                  placeholder="Nueva tarea"
                  @keyup.enter="submitTask"
                />
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

import BreadCrumbs from '@/modules/common/components/BreadCrumbs.vue';
import { useProjectsStore } from '../store/projects.store';
import type { Project } from '../interfaces/project.interface';

// import { useRoute } from 'vue-router';
// const route = useRoute();
// console.log(route.params.id);

interface Props {
  id: string;
}

const router = useRouter();
const props = defineProps<Props>();
const projectStore = useProjectsStore();
const project = ref<Project | null>();
const inputValue = ref('');

// const project = projectStore.projectList.find((project) => project.id === props.id);

watch(
  () => props.id,
  () => {
    project.value = projectStore.projectList.find((project) => project.id === props.id);

    if (!project.value) {
      router.replace('/projects');
    }
  },
  {
    immediate: true,
  },
);

const submitTask = () => {
  projectStore.addTaskToProject(props.id, inputValue.value);
  inputValue.value = '';
};
</script>
