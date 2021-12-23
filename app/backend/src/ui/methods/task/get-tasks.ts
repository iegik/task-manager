import Task from '../../../../../types/entities/task';
import TaskSchema from '../../../database/models/task';

/**
 * Returns list of stored tasks
 *
 * @param [projectId] - task's project identifier,
 */
export async function getTasks(projectId?: string): Promise<Task[]> {
  if (projectId) {
    return TaskSchema
      .find({ projectId: projectId })
      .exec();
  } else {
    return TaskSchema
      .find()
      .exec();
  }
}
