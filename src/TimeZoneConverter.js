import React, { Component } from "react";
import moment from "moment-timezone";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TimeSlider from "./TimeSlider";
import TimeZoneDisplay from "./TimeZoneDisplay";
import AddTimeZone from "./AddTimeZone";
import ScheduleMeetButton from "./ScheduleMeetButton";
import DatePicker from "./DatePicker";
import DarkModeToggle from "./DarkModeToggle";
import "./TimeZoneConverter.css";
import "react-datepicker/dist/react-datepicker.css";

class TimeZoneConverter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timeZones: ["UTC", "Asia/Kolkata"],
      currentTime: moment(),
      selectedDate: moment(),
      darkMode: false,
    };
  }

  handleTimeChange = (utcTime) => {
    this.setState({ currentTime: utcTime });
  };

  handleDateChange = (date) => {
    this.setState({ selectedDate: moment(date) }); // Convert Date to moment
  };

  handleTimeZoneAddition = (timeZone) => {
    this.setState((prevState) => ({
      timeZones: [...prevState.timeZones, timeZone],
    }));
  };

  handleTimeZoneDeletion = (index) => {
    this.setState((prevState) => ({
      timeZones: prevState.timeZones.filter((_, i) => i !== index),
    }));
  };

  onDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(this.state.timeZones);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    this.setState({ timeZones: items });
  };

  handleReverseOrder = () => {
    this.setState((prevState) => ({
      timeZones: [...prevState.timeZones].reverse(),
    }));
  };

  handleDarkModeToggle = () => {
    this.setState((prevState) => ({ darkMode: !prevState.darkMode }));
  };

  render() {
    const { timeZones, currentTime, selectedDate, darkMode } = this.state;
    return (
      <div className={darkMode ? "dark-mode" : "light-mode"}>
        <h1>Time Zone Converter</h1>
        <AddTimeZone onAdd={this.handleTimeZoneAddition} />
        <DatePicker
          selected={selectedDate.toDate()} // Convert moment object to Date
          onChange={this.handleDateChange} // Use handleDateChange method
        />

        <TimeSlider onTimeChange={this.handleTimeChange} />
        <button onClick={this.handleReverseOrder}>Reverse Order</button>
        <DarkModeToggle onToggle={this.handleDarkModeToggle} />
        <DragDropContext onDragEnd={this.onDragEnd}>
          <ScheduleMeetButton time={currentTime} />
          <Droppable droppableId="droppable">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {timeZones.map((zone, index) => (
                  <Draggable key={zone} draggableId={zone} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <TimeZoneDisplay
                          timeZone={zone}
                          currentTime={currentTime}
                          selectedDate={selectedDate}
                          onDelete={() => this.handleTimeZoneDeletion(index)}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    );
  }
}

export default TimeZoneConverter;
