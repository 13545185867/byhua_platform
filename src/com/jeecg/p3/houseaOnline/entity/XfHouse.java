package com.jeecg.p3.houseaOnline.entity;

import java.util.Date;
import java.math.BigDecimal;
import org.jeecgframework.p3.core.utils.persistence.Entity;

/**
 * 描述：</b>XfHouse:<br>
 * @author chao.hua
 * @since：2017年11月19日 18时12分05秒 星期日 
 * @version:1.0
 */
public class XfHouse implements Entity<String> {
	private static final long serialVersionUID = 1L;
	
	
	private Date kaipanDate;
	
	private Date deliverydate;
		return deliverydate;
	}
	public void setDeliverydate(Date deliverydate) {
		this.deliverydate = deliverydate;
	}
	/**
	
	private Integer floorcount;
	
	private String hxpic;
	
	private Integer viewcount;
	public Integer getViewcount() {
		return viewcount;
	}
	public void setViewcount(Integer viewcount) {
		this.viewcount = viewcount;
	}
	public String getHxpic() {
		return hxpic;
	}
	public void setHxpic(String hxpic) {
		this.hxpic = hxpic;
	}
	public String getHxcontent() {
		return hxcontent;
	}
	public void setHxcontent(String hxcontent) {
		this.hxcontent = hxcontent;
	}
	private String hxcontent;
	public Integer getFloorcount() {
		return floorcount;
	}
	public void setFloorcount(Integer floorcount) {
		this.floorcount = floorcount;
	}
	public BigDecimal getArea() {
		return area;
	}
	public void setArea(BigDecimal area) {
		this.area = area;
	}
	private BigDecimal area;
	private String projectname;
	private String buildingname;
	private String cellname;
	private String hxname;
	
	public String getProjectname() {
		return projectname;
	}
	public void setProjectname(String projectname) {
		this.projectname = projectname;
	}
	public String getBuildingname() {
		return buildingname;
	}
	public void setBuildingname(String buildingname) {
		this.buildingname = buildingname;
	}
	public String getCellname() {
		return cellname;
	}
	public void setCellname(String cellname) {
		this.cellname = cellname;
	}
	public String getHxname() {
		return hxname;
	}
	public void setHxname(String hxname) {
		this.hxname = hxname;
	}
	public Date getKaipanDate() {
		return kaipanDate;
	}
	public void setKaipanDate(Date kaipanDate) {
		this.kaipanDate = kaipanDate;
	}
}
