export class Author {
	_id: number;
	_firstName: string;
	_lastName: string;
	_affiliation:string;
	_email:string;
	_phone:string;

	constructor(){

	}

	/*constructor(firstName:string,lastName:string,affiliation:string,email:string,phone:string){
		this.firstName = firstName;
		this.lastName = lastName;
		this.affiliation = affiliation;
		this.email = email;
		this.phone = phone;
	}*/
	//this._id = {"_id":{"$oid":id}};
	set id(id:number){
		this._id = id;
	}

	set firstName(firstName:string){
		this._firstName = firstName;
	}

	set lastName(lastname:string){
		this._lastName = lastname;
	}

	set affiliation(affiliation:string){
		this._affiliation = affiliation;
	}

	set email(email:string){
		this._email = email;
	}

	set phone(phone:string){
		this._phone = phone;
	}

	get id():number{
		return this._id;
	}

	get firstName():string{
		return this._firstName;
	}

	get lastName():string{
		return this._lastName;
	}
	get affiliation():string {
		return this._affiliation;
	}
	get email():string{
		return this._email;
	}
	get phone():string{
		return this._phone;
	}
}
