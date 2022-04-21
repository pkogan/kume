		var L13 = 50/105;
		var L14 = 1.5/130;
		var L15 = 10/110;
		var L17 = 300/160;
		var L18 = 80/120;
		var L19 = 1000/100;
		var L20 = 400/104;
		var L22 = 500/150;
		var L23 = 100/150;
		var H13 = 1/L13;
		var I13 = 6/L13;


			//F Peso Teorico 
		function f_E8(){
			
			resp='';
			if (E5!=''){
				if (E4=="F") {
					resp=(E5-152.4)*0.91+45.5;
				}else{
					resp=(E5-152.4)*0.91+50;
				}

			}
			return	resp;
		}
		
		function f_E10() {
			resp='';

			if (E6 != ''){
				resp=E6/(E5/100*E5/100);
			}
			return	resp;
		}
		function f_E9(){
			resp='';
			if (E6 != ''){
				if (E10>=30){
					resp = (E6-E8)*0.4+E8;
				}
			}
			return	resp;
		}
		function f_F13(){
			return (parseFloat(H13).toFixed(1) + " - " + parseFloat(I13).toFixed(1));
		}
		function f_H14(){

			return (0.0007*E6)/L14;	
		}
		function f_I14(){

				return (0.002*E6)/L14	;	
		}
		function f_J14(){
				return (0.0007*E9)/L14;

		}
		function f_K14(){
				return	(0.002*E9)/L14;
		}

		function	f_F14(){
			if (E10 < 30){
					resp = (parseFloat(H14).toFixed(1) + " - " + parseFloat(I14).toFixed(1));

			} else {
					resp = (parseFloat(J14).toFixed(1) + " - " + parseFloat(K14).toFixed(1));
			}
			return resp;

		}

		function f_H15(){
				return	(0.00002*E6*60)/L15;
		}

		function	f_I15(){
			return	(0.0002*E6*60)/L15;

		}
		function f_J15(){
			return	(0.00002*E9*60)/L15;

		}

		function f_K15(){
				return	(0.0002*E9*60)/L15;
		}
		


		function	f_F15(){
			resp ='';
			if (E10 <30){
				resp=  (parseFloat(H15).toFixed(1) + " - " + parseFloat(I15).toFixed(1));

			}else{
				resp=  (parseFloat(J15).toFixed(1) + " - " + parseFloat(K15).toFixed(1));

			}
			return resp;

		}

		function f_H17(){
				return	(0.02*E6)/L17;
		}

		function	f_I17(){
			return	(0.2*E6)/L17;

		}
		function f_J17(){
			return	(0.02*E9)/L17;

		}

		function f_K17(){
				return	(0.2*E9)/L17;
		}

		function	f_F17(){
			resp ='';
			if (E10 <30){
				resp=  (parseFloat(H17).toFixed(1) + " - " + parseFloat(I17).toFixed(1));
			}else{
				resp=  (parseFloat(J17).toFixed(1) + " - " + parseFloat(K17).toFixed(1));
			}
			return	resp;
		}


		function f_H18(){
				return	(0.01*E6)/L18;
		}

		function	f_I18(){
			return	(0.1*E6)/L18;

		}
		function f_J18(){
			return	(0.01*E9)/L18;

		}

		function f_K18(){
				return	(0.1*E9)/L18;
		}

		function	f_F18(){
			resp ='';
			if (E10 <30){
				resp=  (parseFloat(H18).toFixed(1) + " - " + parseFloat(I18).toFixed(1));
			}else{
				resp=  (parseFloat(J18).toFixed(1) + " - " + parseFloat(K18).toFixed(1));
			}

			return resp;
		}

		function f_H19(){
			return	(0.3*E6)/L19;
		}

		function f_I19(){
			return	(3*E6)/L19;

		}
		function f_J19(){
			return	(0.3*E9)/L19;

		}

		function f_K19(){
				return	(3*E9)/L19;
		}

		function	f_F19(){
			resp ='';
			if (E10 <30){
				resp=  (parseFloat(H19).toFixed(1) + " - " + parseFloat(I19).toFixed(1));
			}else{
				resp=  (parseFloat(J19).toFixed(1) + " - " + parseFloat(K19).toFixed(1));
			}
			return resp;
		}

		function f_H20(){
				return	(0.2*E6)/L20;
		}

		function	f_I20(){
			return	(1.4*E6)/L20;

		}

		function	f_F20(){
			resp ='';
			resp=  (parseFloat(H20).toFixed(1) + " - " + parseFloat(I20).toFixed(1));
			return	resp;
		}

		function f_H22(){
				return	(0.005*E6*60)/L22;
		}

		function	f_I22(){
			return	(0.02*E6*60)/L22;

		}
		function f_J22(){
			return	(0.005*E8*60)/L22;

		}

		function f_K22(){
				return	(0.02*E8*60)/L22;
		}

		function	f_F22(){
			resp ='';
			if (E10 <30){
				resp=  (parseFloat(H22).toFixed(1) + " - " + parseFloat(I22).toFixed(1));
			}else{
				resp=  (parseFloat(J22).toFixed(1) + " - " + parseFloat(K22).toFixed(1));
			}
			return resp;
		}

		function f_H23(){
				return	(0.0008*E6*60)/L23;
		}

		function	f_I23(){
			return	(0.0014*E6*60)/L23;

		}
		function f_J23(){
			return	(0.0008*E8*60)/L23

		}

		function f_K23(){
				return	(0.0014*E8*60)/L23;
		}

		function	f_F23(){
			/*
				=IF(E10<30;H23&" - "&I23;J23&" - "&K23)
			*/
			resp ='';
			if (E10 <30){
				resp=  (parseFloat(H23).toFixed(1) + " - " + parseFloat(I23).toFixed(1));
			}else{
				resp=  (parseFloat(J23).toFixed(1) + " - " + parseFloat(K23).toFixed(1));
			}
			return resp;
		}

		function calcular(){
			resp=false;
			E5 = document.getElementById("altura").value;
			E4 = document.getElementById("genero").value;
			E6 = document.getElementById("peso").value;
		 
			if (!E5.includes('.') && !(E6.includes('.')) && (E5>=140) && (E5<=210) && (E6>=40) && (E6<=180)){				
				
			E8 = f_E8(); 
			E10 = f_E10();
			E9 = f_E9(); F13 = f_F13();
			H14 = f_H14();	I14 = f_I14(); 	J14 = f_J14();	K14 = f_K14();	F14 = f_F14();	H15 = f_H15();  I15 = f_I15();	J15 = f_J15();
			K15 = f_K15();	F15 = f_F15(); 	H17 = f_H17();	I17 = f_I17();	J17 = f_J17();	K17 = f_K17();	F17 = f_F17();	H18 = f_H18();
			I18 = f_I18();	J18 = f_J18();	K18 = f_K18();  F18 = f_F18();	H19 = f_H19();  I19 = f_I19();	J19 = f_J19();	K19 = f_K19();
			F19 = f_F19();	H20 = f_H20();	I20 = f_I20();	F20 = f_F20();	H22 = f_H22();	I22 = f_I22();	J22 = f_J22();	K22 = f_K22();
			F22 = f_F22();	H23 = f_H23();	I23 = f_I23();	J23 = f_J23();	K23 = f_K23();	F23 = f_F23();


			document.getElementById("pesoteorico").innerHTML=(E8=='')?' ':parseFloat(E8).toFixed(2).replace(/\./g, ','); 
			document.getElementById("imc").innerHTML=(E10=='')?' ':parseFloat(E10).toFixed(2).replace(/\./g, ',');
			document.getElementById("pesocorregido").innerHTML=(E9=='')?' ':parseFloat(E9).toFixed(2).replace(/\./g, ','); 
			document.getElementById("c_F13").innerHTML= F13.replace(/\./g, ',');
			document.getElementById("c_F14").innerHTML= F14.replace(/\./g, ',');
			document.getElementById("c_F15").innerHTML= F15.replace(/\./g, ',');
			document.getElementById("c_F17").innerHTML= F17.replace(/\./g, ',');
			document.getElementById("c_F18").innerHTML= F18.replace(/\./g, ',');
			document.getElementById("c_F19").innerHTML= F19.replace(/\./g, ',');
			document.getElementById("c_F20").innerHTML= F20.replace(/\./g, ',');
			document.getElementById("c_F22").innerHTML= F22.replace(/\./g, ',');
			document.getElementById("c_F23").innerHTML= F23.replace(/\./g, ',');
			resp = true;
		}
		return resp;
	}
