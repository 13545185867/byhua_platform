package com.jeecg.p3.houseaOnline.entity;

import java.util.Date;
import java.math.BigDecimal;
import org.jeecgframework.p3.core.utils.persistence.Entity;

/**
 * 描述：</b>XfBuilding:选房 楼栋表<br>
 * @author chao.hua
 * @since：2017年11月19日 15时36分14秒 星期日 
 * @version:1.0
 */
public class XfBuilding implements Entity<String> {
	private static final long serialVersionUID = 1L;
	
	
	private Date kaipanDate;
层）中高层（7-9））
	public Date getKaipanDate() {
		return kaipanDate;
	}
	public void setKaipanDate(Date kaipanDate) {
		this.kaipanDate = kaipanDate;
	}
}
