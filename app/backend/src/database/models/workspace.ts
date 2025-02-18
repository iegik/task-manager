import mongoose from '../index';
import { WorkspaceDocument, WorkspaceModel } from '../interfaces/workspace';
import { ContactTypes } from '../interfaces/teammate';

/**
 * Workspace schema
 */
const WorkspaceSchema: mongoose.Schema<WorkspaceDocument> = new mongoose.Schema ({
  /**
   * Workspace name
   */
  name: {
    type: mongoose.Schema.Types.String,
    required: true,
  },
  /**
   * List of teammates in workspace
   */
  team: [ {
    /**
     * Teammate name
     */
    name: {
      type: mongoose.Schema.Types.String,
    },
    /**
     * List of teammate's contacts
     */
    contacts: [ {
      /**
       * Contact type
       */
      type: {
        type: mongoose.Schema.Types.String,
        default: ContactTypes.Telegram,
      },
      /**
       * Contact value(username or email address)
       */
      value: {
        type: mongoose.Schema.Types.String,
      },
    } ],
  } ],
  /**
   * List of projects in workspace
   */
  projects: [ {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
  } ],
});

export default mongoose.model<WorkspaceDocument, WorkspaceModel>('Workspace', WorkspaceSchema);
