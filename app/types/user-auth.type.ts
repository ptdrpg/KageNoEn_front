import type { rankType } from "./rank.type"
import type { roleType } from "./role.type"
import type { userStatusType } from "./status.type"

export type SecureUserRes = {
	id:        string,
	username:  string,
	email: string,      
	rankId:    string,      
	rank:      rankType,       
	statusId:  string,     
	status:    userStatusType, 
	roleId:    string,      
	role:      roleType,       
	maxRank:   string,      
	elo:       number,         
	isOnline:  boolean,        
	lastLogin: string,   
	createdAt: string,  
	updatedAt: string,  
}

export type dynamiqueLoginType = {
  username: string,
  password: string,
	email:string,
}

export type LoginType = {
  username: string,
  password: string,
}

export type logoutType = {
	message: string
}
