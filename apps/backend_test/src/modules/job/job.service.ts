import { Injectable } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { HttpService } from '@nestjs/axios';
import { UtilService } from '@app/util';

@Injectable()
export class JobService {

  constructor (
    private readonly httpService : HttpService,
    private utilService : UtilService
  ) {}


  create(createJobDto: CreateJobDto) {
    return 'This action adds a new job';
  }

  async findAll(query :any) {
    
    const keys = Object.keys(query)
    let length_keys = keys.length    
    let stringquery = ''


    if (length_keys == 3) {
      stringquery = `?${keys[0]}=${query[keys[0]]}&${keys[1]}=${query[keys[1]]}&${keys[2]}=${query[keys[2]]}`
    }else if (length_keys == 2) {
      stringquery = `?${keys[0]}=${query[keys[0]]}&${keys[1]}=${query[keys[1]]}`
    }else if (length_keys == 1) {
      stringquery = `?${keys[0]}=${query[keys[0]]}`
    }else{
      stringquery = ""
    } 
    
    const listJobs = await this.httpService.axiosRef.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions.json${stringquery}`)
  
    
    if (listJobs.data[0] != undefined) {
      console.log("masuk list jobs");
      
      return await this.utilService.response.success({ data: listJobs.data ,message : "berhasil mendapatkan data list jobs"});
    }else {
      return await this.utilService.response.error({ data: listJobs.data ,message : "data tidak di temukan"});
    }
    
  }

  async findOne(id : string) {
    console.log(id);
    
    const listJobs = await this.httpService.axiosRef.get(`http://dev3.dansmultipro.co.id/api/recruitment/positions/${id}`)
    return await this.utilService.response.success({ data: listJobs.data ,message : "berhasil mendapatkan data list jobs"});
  }

  update(id: number, updateJobDto: UpdateJobDto) {
    return `This action updates a #${id} job`;
  }

  remove(id: number) {
    return `This action removes a #${id} job`;
  }
}
