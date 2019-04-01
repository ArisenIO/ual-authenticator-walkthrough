import { UALError } from 'universal-authenticator-library'

export class UALLedgerError extends UALError {
  constructor(message, type, cause) {
    super(message, type, cause, 'Ledger')
  }
}