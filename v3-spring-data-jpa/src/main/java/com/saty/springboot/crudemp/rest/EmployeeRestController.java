package com.saty.springboot.crudemp.rest;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.saty.springboot.crudemp.entity.Employee;
import com.saty.springboot.crudemp.service.EmployeeService;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*")
public class EmployeeRestController {
	
	
	private EmployeeService employeeService;
	
	@Autowired
	public EmployeeRestController(EmployeeService theEmployeeService) {
		employeeService = theEmployeeService;
	}
	
	
	@GetMapping("/employees")
	public List<Employee> findAll(){
		return employeeService.findAll();
	}
	
	@GetMapping("/employees/{employeeId}")
	public Employee findById(@PathVariable int employeeId) {
		Employee employee =  employeeService.findById(employeeId);
		if(employee == null)
			throw new RuntimeException("Employee with id: "+employeeId+" not found");
		return employee;
	}
	
	@PostMapping("/employees")
	public String addEmployee(@RequestBody Employee theEmployee) {
		theEmployee.setId(0);
		
		employeeService.save(theEmployee);
		
		return "Employee :"+theEmployee.getFirstName()+" is registered";
	}
	
	@PutMapping("/employees")
	public Employee  updateEmployee(@RequestBody Employee theEmployee) {
		employeeService.save(theEmployee);
		return theEmployee;
	}
	
	@DeleteMapping("/employees/{employeeId}")
	public List<Employee> deleteEmployee(@PathVariable int employeeId) {
		Employee employee = employeeService.findById(employeeId);
		
		if(employee == null)
			throw new RuntimeException("employee with id: "+employeeId+" not found");
		employeeService.deleteById(employeeId);
		return employeeService.findAll();
	}
}
