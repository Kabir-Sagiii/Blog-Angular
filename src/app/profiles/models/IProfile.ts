export interface Experience {
  _id ? : string;
  title : 	string;
  company : 	string;
  location : 	string;
  from : 		string;
  to : 		string;
  current : 	boolean;
  description : string;
}

export interface Education {
  _id ? : string;
  school : 	string;
  degree : 	string;
  fieldOfStudy : 	string;
  from : 		string;
  to : 		string;
  current : 	boolean;
  description : string;
}

export interface Social {
  facebook : string;
  youtube : string;
  twitter : string;
  linkedin : string;
  instagram : string
}

export interface IProfile {
  _id ? : string;
  user : string;
  company : string;
  website : string;
  location : string;
  designation : string;
  skills : string[];
  bio : string;
  githubUsername : string;
  experience : Experience[];
  education : Education[]
  social : Social
}
