import { observable } from 'mobx';
import http from '../utils/http';


const initState = {
  userInfo: {},
  async getUser(id){
    const data = await http.get('/api/user/'+id);
    this.userInfo = data.data;
  }
}
const userStore = observable(initState)

export default userStore