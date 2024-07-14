import HeadingText from '../../_components/typography/HeadingText'
import ProfileAvatarCard from './profile/ProfileAvatarCard'
import ChangePasswordCard from './profile/ChangePasswordCard'
import GeneralInfoCard from './profile/GeneralInfoCard'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import API from '../../assets/API'
import useAuth from '../../hook/useAuth'

const ProfilePage = () => {
  const {auth} = useAuth()
  // console.log("AUTH", auth)

  const {data:parsedData} = useQuery({
    queryKey: ['user'],
    queryFn: async () => {
      const response = await axios.get(`${API.GET_USER_DATA}/${auth?.user}`)
      return response?.data?.data
    }
  })

  return (
    <div>
      <HeadingText>Profile Section : </HeadingText>
      <section>
        <div className="md:grid md:grid-cols-3 md:gap-4">
          <ProfileAvatarCard parsedData={parsedData} />
          <ChangePasswordCard />
          <GeneralInfoCard />
        </div>

      </section>
    </div>
  )
}

export default ProfilePage