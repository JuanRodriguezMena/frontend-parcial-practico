import { useEffect, useState } from 'react'
import { Header } from '../components/Header'
import { useNavigate } from 'react-router-dom'
import { useUsersStore } from '../store/usersStore'
import logo from '../assets/UNICESAR 2024.png'
import logoUniversidad from '../assets/logo.png'
import { Bar } from 'react-chartjs-2'

export function Asignaturas() {
  return (
    <div>
      <Header />
    </div>
  )
}
