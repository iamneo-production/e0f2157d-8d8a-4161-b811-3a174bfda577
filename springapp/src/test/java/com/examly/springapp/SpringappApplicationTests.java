package com.examly.springapp;

import org.springframework.http.MediaType;
import org.junit.jupiter.api.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.examly.springapp.SpringappApplication;

import java.io.File;

@RunWith(SpringJUnit4ClassRunner.class) 
@SpringBootTest(classes = SpringappApplication.class)
@AutoConfigureMockMvc
class SpringappApplicationTests {
	
	@Autowired
	private MockMvc mockMvc;

	@Test
	void test_case1() throws Exception {

		String st = "{\"id\":1,\"checkInDate\": \"12-12-12\",\"checkOutDate\": \"12-13-12\",\"customerId\": \"1\",\"name\": \"John\",\"email\": \"john@gmail.com\",\"phone\": \"984523567\",\"room\":[],\"payment\":[],\"cancellation\":[]}";
		mockMvc.perform(MockMvcRequestBuilders.put("/bookings/1").contentType(MediaType.APPLICATION_JSON).content(st)
				.accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk()).andReturn();
	}

	@Test
	void test_case2() throws Exception {

		mockMvc.perform(get("/bookings").accept(MediaType.APPLICATION_JSON)).andDo(print()).andExpect(status().isOk())
				.andExpect(jsonPath("$").isArray()).andReturn();
	}

	@Test
	void test_case3() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.delete("/bookings/1").accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk()).andReturn();
	}

	@Test
	void test_case4() throws Exception {

		String st = "{\"paymentId\":1,\"amount\": 5000,\"paymentStatus\": \"Done\"}";
		mockMvc.perform(MockMvcRequestBuilders.post("/bookings/2/payments").contentType(MediaType.APPLICATION_JSON).content(st)
				.accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk())
				.andExpect(jsonPath("$").value(true)).andReturn();
	}

	@Test
	void test_case5() throws Exception {

		String st = "{\"paymentId\":1,\"amount\": 5000.0,\"paymentStatus\": \"Done\"}";
		mockMvc.perform(MockMvcRequestBuilders.put("/bookings/2/payments/1").contentType(MediaType.APPLICATION_JSON)
				.content(st).accept(MediaType.APPLICATION_JSON)).andExpect(MockMvcResultMatchers.status().isOk())
				.andReturn();
	}

	@Test
	void test_case6() throws Exception {

		mockMvc.perform(get("/bookings/2/payments").accept(MediaType.APPLICATION_JSON)).andDo(print())
				.andExpect(status().isOk()).andExpect(jsonPath("$").isArray()).andReturn();
	}

	@Test
	void test_case7() throws Exception {
		mockMvc.perform(MockMvcRequestBuilders.delete("/bookings/2/payments/1").accept(MediaType.APPLICATION_JSON))
				.andDo(print()).andExpect(status().isOk()).andReturn();
	}


}
