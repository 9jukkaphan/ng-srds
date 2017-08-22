export class Category{
	_id:number;
	_name:string;
	_description:string;

	set id(id:number){
		this._id = id;
	}

	set name(name:string){
		this._name = name;
	}

	set description(description:string){
		this._description = description;
	}

	get id():number{
		return	this._id;
	}

	get name():string{
		return this._name;
	}

	get description():string{
		return this._description;
	}
}