import * as $ from "jquery";

API_URL = 'http://api.natphoto.me'


export default class ApiService {

  static getPhotos(offset=0, limit=9) {
    return $.ajax({
      url: API_URL + '/photos',
      type: "get",
      data: {
        offset: offset,
        limit: limit
      }
    })
  }

  static getParks(offset=0, limit=9) {
    return $.ajax({
      url: API_URL + '/parks',
      type: "get",
      data: {
        offset: offset,
        limit: limit
      }
    })
  }

  static getCameras(offset=0, limit=9) {
    return $.ajax({
      url: API_URL + '/cameras',
      type: "get",
      data: {
        offset: offset,
        limit: limit
      }
    })
  }

  static getPark(name) {
    return $.get(API_URL + '/parks/' + name)
  }

  static getPhoto(name) {
    return $.get(API_URL + '/photos/' + name)
  }

  static getCamera(id) {
    return $.get(API_URL + '/cameras/' + id)
  }
}
