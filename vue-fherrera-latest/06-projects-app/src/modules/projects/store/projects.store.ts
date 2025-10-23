import { defineStore } from 'pinia';
import { computed, ref } from 'vue';
import type { Project } from '../interfaces/project.interface';
import { v4 as uuidv4 } from 'uuid';
import { useLocalStorage } from '@vueuse/core';

// const initialLoad = (): Project[] => {
//   return [
//     {
//       id: uuidv4(),
//       name: 'Project 1',
//       tasks: [],
//     },
//     {
//       id: uuidv4(),
//       name: 'Project 2',
//       tasks: [],
//     },
//   ];
// };

export const useProjectsStore = defineStore('projects', () => {
  // const projects = ref<Project[]>(initialLoad());
  const projects = ref(useLocalStorage<Project[]>('projects', []));

  const addProject = (name: string) => {
    if (name.length === 0) return;
    projects.value.push({
      id: uuidv4(),
      name: name,
      tasks: [],
    });
  };

  const addTaskToProject = (projectId: string, taskName: string) => {
    if (taskName.trim().length === 0) return;

    const project = projects.value.find((project) => project.id === projectId);
    if (!project) return;

    project?.tasks.push({
      id: uuidv4(),
      name: taskName,
      completedAt: undefined,
    });
  };

  const toggleTask = (projectId: string, taskId: string) => {
    const project = projects.value.find((project) => project.id === projectId);
    if (!project) return;

    const task = project.tasks.find((t) => t.id === taskId);
    if (!task) return;

    task.completedAt = task.completedAt ? undefined : new Date();
  };

  return {
    //Properties
    projects,

    //Getters (computed)
    projectList: computed(() => [...projects.value]),
    noProjects: computed(() => projects.value.length === 0),

    projectsWithCompletion: computed(() => {
      return projects.value.map((project) => {
        const total = project.tasks.length;
        const completedTasks = project.tasks.filter((t) => t.completedAt !== undefined);
        const completion = total === 0 ? 0 : (completedTasks.length / total) * 100;

        return {
          id: project.id,
          name: project.name,
          taskCount: total,
          completion: Math.round(completion),
        };
      });
    }),

    //Actions
    addProject,
    addTaskToProject,
    toggleTask,
  };
});
