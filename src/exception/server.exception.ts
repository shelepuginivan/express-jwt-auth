export class ServerException extends Error {
	status: number

	constructor(status: number, message: string) {
		super(message)
		this.status = status
	}
}

export class BadRequest extends ServerException {
	constructor(message: string) {
		super(400, message)
	}
}

export class Unauthorized extends ServerException {
	constructor(message: string) {
		super(401, message)
	}
}

export class Forbidden extends ServerException {
	constructor(message: string) {
		super(403, message)
	}
}
