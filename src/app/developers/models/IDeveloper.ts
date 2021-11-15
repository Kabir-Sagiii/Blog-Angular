interface Experience {
  _id ? : string;
  title : 	string;
  company : 	string;
  location : 	string;
  from : 		string;
  to : 		string;
  current : 	boolean;
  description : string;
}

interface Education {
  _id ? : string;
  school : 	string;
  degree : 	string;
  fieldOfStudy : 	string;
  from : 		string;
  to : 		string;
  current : 	boolean;
  description : string;
}

interface Social {
  facebook : string;
  youtube : string;
  twitter : string;
  linkedin : string;
  instagram : string
}

interface User {
  _id : string;
  name : string;
  avatar : string;
}

export interface IDeveloper {
  _id ? : string;
  user : User;
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
