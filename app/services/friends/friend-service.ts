import type { FriendsType } from "~/types/friends.type";
import { apiService } from "../custom-axios";
import { SECURITY_CONST } from "~/utils/app-constants";

export class FriendService {
  getAllFriends = async (id: string): Promise<FriendsType[]> => {
    const response = await apiService.get(`${SECURITY_CONST.FriendsEndpoint}/${id}`)
    
    return response.data.data;
  }
}
