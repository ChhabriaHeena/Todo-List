import { useState } from 'react'
import useStyles from './WorkTitle.styles'

const WorkTitle: any = (props: any) => {

  const classes = useStyles();

  const { title, setWorkList, workList } = props;
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);

  const handleEdit = () => {
    setIsEditing(true)

  }

  const handleTitleEdit = (e: any) => {
    setNewTitle(e.target.value)
  }

  const handleSaveUpdatedTitle = () => {
    let workListUpdated = workList.map((item: any) => item === title ? newTitle : item)
    setWorkList(workListUpdated)
    setIsEditing(false)
  }


  const handleCancelUpdate = () => {
    setNewTitle(title)
    setIsEditing(false)
  }

  const handleDelete = (clickedTitle: any) => {
    const updatedWorkList = workList.filter((item: any) => item !== clickedTitle);
    setWorkList(updatedWorkList)

  }

  return (
    <div className={classes.title}>
      {
        isEditing ? (
          <>
            <input type="text" value={newTitle} onChange={(e) => handleTitleEdit(e)} />
            <div>

              <button className={classes.titleButton} onClick={handleSaveUpdatedTitle}>Save</button>
              <button className={classes.titleButton} onClick={handleCancelUpdate}>Cancel</button>
            </div>

          </>
        )
          : (<>
            <p>{title}</p>
            <div>
              <button className={classes.titleButton} onClick={handleEdit}>Edit</button>
              <button className={classes.titleButton} onClick={() => handleDelete(title)}>Delete</button>
            </div>
          </>)}

    </div>
  )
}

export default WorkTitle
