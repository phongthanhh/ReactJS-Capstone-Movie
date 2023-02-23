import { toast } from 'react-toastify'
import { SET_HE_THONG_RAP } from 'redux/types/theaterTypes/theaterType'
import { createShowTimesService, getHeThongRapService, getThongTinHeThongRapService } from '../../services/theaterService'

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

export const getThongTinHeThongRapAction = () => async (dispatch) => {
  try {
    const result = await getThongTinHeThongRapService()
    dispatch({
      type: SET_HE_THONG_RAP,
      payload: result.data.content
    })
  } catch (error) {
    toast.error(error.response?.data.content)
  }
}
