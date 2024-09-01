import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
declare var $: any;


function hello() {
  alert('Hi');
  $(document).ready(function () {
$.confirm({ icon: 'fa fa-check-circle', title: 'Success !', theme: 'bootstrap', content: 'Updated Successfully !', type: 'green', closeIcon: true, buttons: { Ok: { text: 'Ok', btnClass: 'btn-orange', }, } });
         
})
  //alert('Hello!!!');
}
function dropdown(){
  var config = {
    '.chosen-select': {},
    '.chosen-select-deselect': { allow_single_deselect: true },
    '.chosen-select-no-single': { disable_search_threshold: 10 },
    '.chosen-select-no-results': { no_results_text: 'Oops, nothing found!' },
    '.chosen-select-width': { width: "95%" }
  }
// for (var selector in config) {
//     $(selector).chosen(config[selector]);
// }
}
function Date() {
  $.noConflict();
  $.widget.bridge('uibutton', $.ui.button);
    $(function () {
        $('.datepicker').datepicker();
    });
        $(function () {
            $('#txtDOB').datepicker({
                changeMonth: true,
                changeYear: true,
                //yearRange: '1970:2012',
                dateFormat: 'd MM yy',
                yearRange: '-50:+10'
            });
            $('#txtDOA').datepicker({
              changeMonth: true,
              changeYear: true,
              //yearRange: '1970:2012',
              dateFormat: 'd MM yy',
              yearRange: '-50:+10'
            });
        });
}
@Component({
  // selector: 'app-student-registration',
  selector: 'student-registration',
  templateUrl: './student_registration.component.html',
  //styleUrls: ['./src/assets/styles/stylesheet.css'],
  // styleUrls: ['../../assets/styles/stylesheet.css', '../../assets/styles/datepicker3.css', '../../assets/styles/daterangepicker.css'],
  //styleUrls: ['../../assets/styles/stylesheet.css'],
  //providers: [DatePipe]
})
export class student_registrationComponent implements OnInit { 
  //selectedFile : File;
//constructor(private http: HttpClient) { }
remark = '';

//constructor(private router: Router) { }
constructor(private httpService: HttpClient) { } 

myFiles: string[] = [];
sMsg: string = ''; 


  ngOnInit(){
      $(document).ready(function () {
        $("#Loader").hide();
        var ImageUrl = $("#txtImageUrl").text().trim();
        if(ImageUrl==null || ImageUrl=="")
            $("#Image1").attr("src", "/assets/content/imgs/speaker-3.png");          
    })
      //hello();
      dropdown();
      Date();
    } 
    
    //url; //Angular 8
url: any; //Angular 11, for stricter type
Image1:any;
msg = "";
selectedFile: any;
event:any;
http:any;
file: any;

getFileDetails(event:any) {  
  //console.log (e.target.files);  
  for (var i = 0; i < event.target.files.length; i++) {  
    this.myFiles.push(event.target.files[i]);  
  }  
}  


onbtnSubmitClick(){
  hello();
}

// onUpload() { 
//   alert('Clicked !'); 
//   const frmData = new FormData();  
//   for (var i = 0; i < this.myFiles.length; i++) {  
//     frmData.append("fileUpload", this.myFiles[i]);  
//     if (i == 0) {  
//       frmData.append("remark", this.remark);  
//     }  
//   }  
//   this.httpService.post('http://localhost:50401/api/FileUpload/UploadFiles', frmData).subscribe(  
//     (data:any) => {  
//       // SHOW A MESSAGE RECEIVED FROM THE WEB API.  
//       this.sMsg = data as string;  
//       console.log(this.sMsg);  
//     });  
// }  

onUpload1(event:any){
  alert('jh');
  const fd = new FormData();
  fd.append('image', this.selectedFile, this.selectedFile.name);
  this.selectedFile = event.target.files[0];
  alert(this.selectedFile);
  this.http.post('http://localhost:4200/assets/content/imgs/Studentpics/', this.selectedFile)
    .subscribe((res:any) => {
      console.log(res);
    });
}

	//selectFile(event) { //Angular 8
	selectFile(event: any) { //Angular 11, for stricter type
		// if(!event.target.files[0] || event.target.files[0].length == 0) {
		// 	this.msg = 'You must select an image';
    //   alert('Hit!');
		// 	return;
		//}
    this.selectedFile = event.target.files[0];

		var mimeType = event.target.files[0].type;	
		if (mimeType.match(/image\/*/) == null) {
			this.msg = "Only images are supported";
			return;
		}

		var reader = new FileReader();
		reader.readAsDataURL(event.target.files[0]);
		
		reader.onload = (_event) => {
			this.msg = "";
			this.url = reader.result; 
		} 
  } 
}