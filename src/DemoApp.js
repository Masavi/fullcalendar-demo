import React from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!

export default class DemoApp extends React.Component {
  render() {
    return (
      <FullCalendar
        ref={this.props.calendarRef}
        locale={'es'}
        plugins={[ dayGridPlugin ]}
        initialView="dayGridMonth"
        events={[
          { 
            title: 'Holidays... 🍹',
            start: '2021-11-30',
            end: '2021-12-17',
            display: 'background'
          }
        ]}
      />
    )
  }
}