export default {
    // BANDS_API_ENDPOINT: 'https://cors-anywhere.herokuapp.com/https://rest.bandsintown.com/artists/ghostpavilion/events?app_id=a822c5b655ee3cb277d1862ae8971370&date=all',
    API_ENDPOINT: process.env.API_URL || 'postgres://xavztgxfdcomhv:f83dbbe45f536901fb4adde3dba94492aafeb13251b49aa021a5fe5566956434@ec2-23-21-148-109.compute-1.amazonaws.com:5432/d5aqqicj6iomv2',
    ADMIN_PW: process.env.REACT_APP_ADMIN_PW || 'gp_admin'
  }