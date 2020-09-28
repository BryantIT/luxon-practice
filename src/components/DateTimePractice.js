import React, { useState, useContext, useEffect } from 'react'
import { DateTime } from 'luxon'
// material ui
import PickerToolbar from '@material-ui/pickers/_shared/PickerToolbar'
import ToolbarButton from '@material-ui/pickers/_shared/ToolbarButton'
import { MuiPickersUtilsProvider, DatePicker } from '@material-ui/pickers'
import { Container, Grid, IconButton, List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Box, DialogContentText, Dialog, DialogActions, DialogContent, DialogTitle, makeStyles } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'
import LuxonUtils from '@date-io/luxon';

export default function DateTimeProactice () {
  const dateFromMillis = DateTime.fromMillis(1601296853062)
  console.log('FROM MILLIS', dateFromMillis.toObject())
  const dateToMillis = DateTime.local().toMillis()
  console.log('TO MILLIS', dateToMillis)
  const dateToObject = DateTime.local().toObject()
  console.log('OBJECT', dateToObject)
  const dateFromDb = db.map(date => {
    const converted = DateTime.fromMillis(date)
    const simple = converted.toObject()
    const readable = converted.toLocaleString()
    console.log('LOCAL STRING', readable)
    return simple
  })
  console.log("FROM DB", dateFromDb)
  console.log('UTC', DateTime.utc(2017, 5, 15))
  const dateConvert = dateFromDb.toLocaleString()
  const [selectedDate, handleDateChange] = useState(new Date());
  const [submittedDate, setSubmittedDate] = useState('')

  console.log('LUXON', DateTime.local())
  console.log('DATE', Date())

  console.log('SELECTED DATE', selectedDate)
  console.log('SUBMITTED DATE', submittedDate)




  const handleChange = (date) => {
    handleDateChange(date)
    setSubmittedDate(date)

  }

  return (
    <div>
        <div>
          <h1>{dateToObject.year}</h1>
          <h1>{dateToObject.month}</h1>
          <h1>{dateToObject.day}</h1>
        </div>
      <MuiPickersUtilsProvider utils={LuxonUtils}>
        <DatePicker
          value={selectedDate}
          onChange={handleChange} />
      </MuiPickersUtilsProvider>
    </div>
  )
}

const db = [
  1601296853062,
  1602196853062,
  1602196853062,
  1601269853062,
  1601269853062,
  1601296583062,
  1601296583062,
  1601296850362,
  1601296850362,
  1601296850362
]
