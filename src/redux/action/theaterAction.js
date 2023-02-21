import { toast } from 'react-toastify'
import { createShowTimesService, getHeThongRapService } from '../../services/theaterService'

export const getHeThongRapAction = () => async () => {
  try {
    const result = await getHeThongRapService()
    console.log(result.data.content)
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}

export const createShowTimesAction = (data) => async () => {
  try {
    await createShowTimesService(data)
    toast.success('Create ShowTimes Success !')
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}
