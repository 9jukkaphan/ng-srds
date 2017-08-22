export class Publication{ 
	_name:string;
	_acronym:string;
	_number:string;
	_volume:string;
	_doi:string;
	_article:string;
	_isbn:string;
	_type:string;
	_location:string;
	_date:date;

	set name(name:string){
		this._name = name;
	}

	set acronym(acronym:string){
		this._acronym = acronym;
	}

	set number(number:string){
		this._number = number;
	}

	set volumn(volumn:string){
		this._volume = volumn;
	}

	set doi(doi:string){
		this._doi = doi;
	}

	set article(article:string){
		this._article = article;
	}
}
class date{ 
	_start:string;
	_end:string;

	set start(date_start:string){
		this._start = date_start;
	}

	set end(date_end:string){
		this._end = date_end;
	}

	get start():string{
		return this._start;
	}

	get end():string{
		return this._end;
	}
}