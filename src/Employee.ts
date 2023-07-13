interface IEmployee {
  fName: string
  lName: string
  age: number
  cool?: boolean
  app: {appName: string; production: boolean }
}

interface IManager extends IEmployee {
  salaryTier: number
}



let employee1: IEmployee = {
  id: 12,
  fName: 'john',
  lName: 'Therlonge',
  age: 26,
  cool: true,
  app: {appName: 'CF Akeno', production: true },
}

//@ts-ignore
let manager1:  IManager = { 
  fName: 'john',
  lName: 'Therlonge',
  age: 26,
  cool: true,
  app: {appName: 'CF Akeno', production: true },
  salaryTier: 2,
}
