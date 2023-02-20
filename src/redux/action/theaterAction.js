import { getHeThongRapService } from '../../services/theaterService'

export const getHeThongRapAction = () => async () => {
  try {
    const result = await getHeThongRapService()
    console.log(result.data.content)
  } catch (error) {
    console.log(error.response?.data)
  }
}
