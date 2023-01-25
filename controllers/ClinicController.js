import { Clinic } from '../models/ClinicModel.js'

export class ClinicController {

    static async findByCname(Cname) {
        try {
          return Clinic.findOne({ Cname }).exec()
        } catch (error) {
          return error
        }
      }
   /**
   * Creates
    * @param {Clinicname} Clinicname
    * @param {Registernumber} Registernumber
    * @param {ABN} ABN
    *  @param {Phone} Phone
    * @param {Date} Date
    * @param {Address} Address
    * @param {Code} Code
    * @param {textarea} textarea
    * @returns save result
    */
   static async createclinic(Clinicname, Registernumber, ABN, Phone, Date ,Address,Code,textarea) {
       const clinic = new Clinic()
       clinic.Clinicname = Clinicname;
       clinic.Registernumber = Registernumber;
       clinic.ABN = ABN;
       clinic.Phone = Phone;
       clinic.Date = Date;
       clinic.Address = Address;
       clinic.Code = Code;
       clinic.textarea =textarea;
       const savedClinic = await clinic.save()
       return savedClinic
   }
       catch(error) {
        return error
   }
}

