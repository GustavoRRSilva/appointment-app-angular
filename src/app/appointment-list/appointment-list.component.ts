import { Component, OnInit } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  static id_:number = 1
  newAppointmentTitle:string = ''
  newAppointmentDate:Date = new Date()

  appointments: Appointment[] = []

  ngOnInit(): void {
    const savedAppointments = localStorage.getItem("appointments")
    this.appointments = savedAppointments ? JSON.parse(savedAppointments) : []
  }

  createAppointment():void {
    if(this.newAppointmentDate && this.newAppointmentDate){
      let newAppointment:Appointment = {
        id:Date.now(),
        title:this.newAppointmentTitle,
        data:this.newAppointmentDate
      }
      this.appointments.push(newAppointment)
      this.newAppointmentDate = new Date()
      this.newAppointmentTitle = ''
      localStorage.setItem("appointments",JSON.stringify(this.appointments))
      return alert('Appointment created')
    }
    return alert("Values shouldn't be null")
  }

  showAppointment():Appointment[]{
    return this.appointments
  }

  deleteAppointment(index:number){
    this.appointments.splice(index,1)
    localStorage.setItem("appointments",JSON.stringify(this.appointments))

  }
}
