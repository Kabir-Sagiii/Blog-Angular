export interface Like {
  user  : string;
}

export interface IComment {
  _id? : string;
  user : string;
  text : string;
  name : string;
  avatar : string;
  date : string;
}

export interface IPost {
  _id?: string;
  user : string;
  text : string;
  name : string;
  avatar : string;
  likes : Like[];
  comments : IComment[];
  createdAt : string;
}
