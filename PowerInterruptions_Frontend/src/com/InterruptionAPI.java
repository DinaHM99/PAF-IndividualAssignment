package com;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.Scanner;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/InterruptionAPI")
public class InterruptionAPI extends HttpServlet {
	
	Interruption interruptionObj = new Interruption();
       
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String output = interruptionObj.insertInterruption(request.getParameter("date"),
		request.getParameter("time"),
		request.getParameter("premisesID"),
		request.getParameter("area"),
		request.getParameter("reason"),
		request.getParameter("status"));
		response.getWriter().write(output);
		
	}
	
	// Convert request parameters to a Map
	private static Map getParasMap(HttpServletRequest request) {
		Map<String, String> map = new HashMap<String, String>();
		try {
			Scanner scanner = new Scanner(request.getInputStream(), "UTF-8");
			String queryString = scanner.hasNext() ? scanner.useDelimiter("\\A").next() : "";
			scanner.close();
			String[] params = queryString.split("&");
			for (String param : params) {
				String[] p = param.split("=");
				map.put(p[0], p[1]);
			}
		} catch (Exception e) {
		}
		return map;
	}

	protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map paras = getParasMap(request);
		String output = interruptionObj.updateInterruption(paras.get("hidInterruptionIDSave").toString(),
		paras.get("date").toString(),
		paras.get("time").toString(),
		paras.get("premisesID").toString(),
		paras.get("area").toString(),
		paras.get("reason").toString(),
		paras.get("status").toString());
		response.getWriter().write(output);
		
	}

	protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		Map paras = getParasMap(request);
		String output = interruptionObj.deleteInterruption(paras.get("interruptionID").toString());
		response.getWriter().write(output);
		
	}

}
