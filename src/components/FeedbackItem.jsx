import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'
import Card from './shared/Card'
import {FaTimes, FaEdit} from 'react-icons/fa'
import FeedbackContext from '../context/FeedbackContext'

function FeedbackItem({item}) {
    const {deleteFeedback, editFeedbackItem} = useContext(FeedbackContext)
    return (
    <Card>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => deleteFeedback(item.id)} className='close'>
            <FaTimes  color='purple'/>
        </button>
        <button className='edit' onClick={() => editFeedbackItem(item)}>
            <FaEdit color='purple'/>
        </button>
        <div className='text-disply'>{item.text}</div>
     
    </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object.isRequired,
}

export default FeedbackItem