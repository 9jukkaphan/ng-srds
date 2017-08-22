export class Paper{ 
	_id: number;
	_title:string;
	_abstract:string;
	_keywords:string[];
	_categories:string[];
	_language:string;
	_lab:string;
	_link:string;
	_authors:Authors[];

	set id(id:number){
		this.id = id;
	}

	set title(title:string){
		this._title = title;
	}

	set astrat(abstract:string){
		this._abstract = abstract;
	}

	set keywords(keywords:string[]){
		this._keywords = keywords;
	}

	set categories(categories:string[]){

	}

	set language(language:string){
		this._language = language;
	}

	set lab(lab:string){
		this._lab = lab;
	}

	set link(link:string){
		this._link = link;
	}

	set authors(authors:Authors[]){
		this._authors = authors;
	}

	get id():number{
		return this._id;
	}

	get title():string{
		return this._title;
	}

	get abstract():string{
		return this._abstract;
	}

	get keywords():string[]{
		return this._keywords;
	}

	get categories():string[]{
		return this._categories;
	}

	get language():string{
		return this._language;
	}

	get lab():string{
		return this._lab;
	}

	get link():string{
		return this._link;
	}

	get authors():Authors[]{
		return this._authors;
	}

}

class Authors{
	_informalName:string;
	_id:number;

	set informalName(informalName:string){
		this._informalName = informalName;
	}

	set id(id:number){
		this._id = id;
	}

	get informalName():string{
		return	this._informalName;
	}

}
