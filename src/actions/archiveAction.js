import { STORY_ARCHIVE } from "../constants/actionTypes";
const doArchive = id => ({
  type: STORY_ARCHIVE,
  id
});

export { doArchive };
